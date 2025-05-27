import {Button, Checkbox, Form, Input, Select, Space} from 'antd'
import React, {FC, useEffect} from 'react'
import {QuestionRadioPropsType} from './type'
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons'
import {optionType} from './type'

//属性表单
const QuestionRadioPropsComponent: FC<QuestionRadioPropsType> = (props: QuestionRadioPropsType) => {
  const {title, isVertical, option = [], onChange, disable, value} = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({title, isVertical, value, option})
  }, [title, isVertical, value, option])

  //字段更新
  const valueChange = () => {
    if (onChange) {
      const newValue = form.getFieldsValue() as QuestionRadioPropsType
      if (newValue.option) {
        newValue.option = newValue.option.filter((item: optionType) => {
          return item.text !== null
        })
      }
      onChange(newValue)
    }
  }

  return (
    <Form
      layout="vertical"
      initialValues={{title, isVertical, value, option}}
      form={form}
      onValuesChange={valueChange}
      disabled={disable}
    >
      <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入标题'}]}>
        <Input />
      </Form.Item>
      <Form.Item label="选项">
        <Form.List name="option">
          {(fields, {add, remove}) => (
            <>
              {fields.map(({key, name}, index) => (
                <Space key={key} align="baseline">
                  <Form.Item
                    name={[name, 'text']}
                    rules={[
                      {required: true, message: '请输入文本'},
                      {
                        validator: (_, text) => {
                          const {option = []} = form.getFieldsValue()
                          let num = 0
                          option.forEach((item: {text: string; value: string}) => {
                            item.text === text && num++
                          })
                          return num > 1 ? Promise.reject('文本重复') : Promise.resolve()
                        },
                      },
                    ]}
                  >
                    <Input placeholder="请输入选项" />
                  </Form.Item>
                  {index > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add({text: '', value: Date.now().toString()})}
                  block
                  icon={<PlusOutlined />}
                >
                  添加选项
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item label="默认选中" name="value">
        <Select
          value={value}
          allowClear
          options={option.map((item: optionType) => {
            return {
              label: <span>{item.text}</span>,
              value: item.value,
            }
          })}
        ></Select>
      </Form.Item>
      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  )
}
export default QuestionRadioPropsComponent

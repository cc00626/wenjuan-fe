import {Button, Checkbox, Form, Input, Space} from 'antd'
import React, {FC, useEffect} from 'react'
import {QuestionCheckboxPropsType} from './type'
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons'
import {listType} from './type'

//属性表单
const QuestionCheckboxPropsComponent: FC<QuestionCheckboxPropsType> = (
  props: QuestionCheckboxPropsType
) => {
  const {title, isVertical, list = [], onChange, disable} = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({title, isVertical, list})
  }, [title, isVertical, list])

  //字段更新
  const valueChange = () => {
    if (onChange) {
      const newValue = form.getFieldsValue() as QuestionCheckboxPropsType
      if (newValue.list) {
        newValue.list = newValue.list.filter((item: listType) => {
          return item.text !== null
        })
      }
      onChange(newValue)
    }
  }

  return (
    <Form
      layout="vertical"
      initialValues={{title, isVertical, list}}
      form={form}
      onValuesChange={valueChange}
      disabled={disable}
    >
      <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入标题'}]}>
        <Input />
      </Form.Item>
      <Form.Item label="选项">
        <Form.List name="list">
          {(fields, {add, remove}) => (
            <>
              {fields.map(({key, name}, index) => (
                <Space key={key} align="baseline">
                  <Form.Item name={[name, 'checked']} valuePropName="checked">
                    <Checkbox></Checkbox>
                  </Form.Item>
                  <Form.Item
                    name={[name, 'text']}
                    rules={[
                      {required: true, message: '请输入文本'},
                      {
                        validator: (_, text) => {
                          const {list = []} = form.getFieldsValue()
                          let num = 0
                          list.forEach((item: {text: string; value: string}) => {
                            item.text === text && num++
                          })
                          return num > 1 ? Promise.reject('文本重复') : Promise.resolve()
                        },
                      },
                    ]}
                  >
                    <Input placeholder="请输入选项" />
                  </Form.Item>
                  {index > 0 && <MinusCircleOutlined onClick={() => remove(name)} />}
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add({text: '', value: Date.now().toString(), checked: false})}
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
      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  )
}
export default QuestionCheckboxPropsComponent

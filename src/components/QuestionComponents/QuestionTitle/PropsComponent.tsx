import {Checkbox, Form, Input, Select} from 'antd'
import React, {FC, useEffect} from 'react'
import {QuestionTitlePropsType} from './type'

//属性表单
const QuestionTitlePropsComponent: FC<QuestionTitlePropsType> = (props: QuestionTitlePropsType) => {
  const {text, level, isCenter} = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({text, level, isCenter})
  }, [text, level, isCenter])
  return (
    <Form layout="vertical" initialValues={{text, level, isCenter}} form={form}>
      <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入标题'}]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Select>
          <Select.Option value={1}>1</Select.Option>
          <Select.Option value={2}>2</Select.Option>
          <Select.Option value={3}>3</Select.Option>
          <Select.Option value={4}>4</Select.Option>
          <Select.Option value={5}>5</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}
export default QuestionTitlePropsComponent

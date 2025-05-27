import {Form, Input} from 'antd'
import React, {FC, useEffect} from 'react'
import {QuestionTextareaPropsType} from './type'
const {TextArea} = Input
//属性表单
const QuestionInputPropsComponent: FC<QuestionTextareaPropsType> = (
  props: QuestionTextareaPropsType
) => {
  const {title, text, onChange, disable} = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({title, text})
  }, [title, text])

  //字段更新
  const valueChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      layout="vertical"
      initialValues={{title, text}}
      form={form}
      onValuesChange={valueChange}
      disabled={disable}
    >
      <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入标题'}]}>
        <Input />
      </Form.Item>
      <Form.Item label="内容" name="text">
        <TextArea />
      </Form.Item>
    </Form>
  )
}
export default QuestionInputPropsComponent

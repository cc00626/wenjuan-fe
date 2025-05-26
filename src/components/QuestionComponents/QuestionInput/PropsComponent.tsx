import {Form, Input} from 'antd'
import React, {FC, useEffect} from 'react'
import {QuestionInputPropsType} from './type'

//属性表单
const QuestionInputPropsComponent: FC<QuestionInputPropsType> = (props: QuestionInputPropsType) => {
  const {title, placeholder, onChange} = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({title, placeholder})
  }, [title, placeholder])

  //字段更新
  const valueChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      layout="vertical"
      initialValues={{title, placeholder}}
      form={form}
      onValuesChange={valueChange}
    >
      <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入标题'}]}>
        <Input />
      </Form.Item>
      <Form.Item label="Placeholder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  )
}
export default QuestionInputPropsComponent

import React, {FC, useEffect} from 'react'
import {Form, Input, Checkbox} from 'antd'
import {QuestionParagraphPropsType} from './type'
const {TextArea} = Input
const QuestionParagraphPropsComponent: FC<QuestionParagraphPropsType> = (
  props: QuestionParagraphPropsType
) => {
  const {text, isCenter, onChange, disable} = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({text, isCenter})
  }, [text, isCenter])

  //字段更新
  const valueChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      layout="vertical"
      initialValues={{text, isCenter}}
      form={form}
      onValuesChange={valueChange}
      disabled={disable}
    >
      <Form.Item label="内容" name="text" rules={[{required: true, message: '请输入内容'}]}>
        <TextArea />
      </Form.Item>
      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default QuestionParagraphPropsComponent

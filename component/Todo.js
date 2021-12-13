import { Form, Input, Button, Checkbox } from 'antd';

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    let data = JSON.parse(localStorage.getItem('todo'));
    data = [
        ...data,
        { todo: values, isChecked: false, id:data.length },
      ];
    localStorage.setItem('todo',JSON.stringify(data));
  };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 10 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="task"
        rules={[{ required: true, message: 'Please input your task!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;

import { Button, Form, Input, ConfigProvider } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LoginForm: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

    const onFinish = (values: any): void => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any): void => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: 20
                    }
                }}
            >
                <Form
                    name="basic"
                    style={{
                        backgroundColor: "#fbb034",
                        backgroundImage: "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)"
                    }}
                    className="h-70 p-10 pt-0 rounded-md"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    autoComplete="off"
                >
                    <div className="pt-12">
                        <h1>Login</h1>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: "Please input your email!" }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: "Please input your password!" }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            className="mt-10 w-full bg-transparent border-blue-600 hover:bg-blue-600"
                        >
                            Submit
                        </Button>
                    </div>
                </Form>
            </ConfigProvider>
        </div>
    );
};

export default LoginForm;

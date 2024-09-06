import {Input, InputNumber, Select, Radio, Checkbox, Form, Button, Space} from 'antd';

const TouristForm = (props:any) => {
    const { statesList, genderOptions, genderData, placeTypeList, editedObj } = props;
    const [form] = Form.useForm();


    const onGenderChange = ({ target: { value } }: any) => {
        // setGender(value)
    }

    const onSubmit = () => {

    }

    const onUpdate = () => {
        
    }

    return (<>
            <div className='curd-item-container'>
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        colon={false}
                        labelAlign={'left'}
                        size={'small'}
                        form={form}

                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input name' }]}
                        >
                            <Input placeholder='Name of the tourist' />
                        </Form.Item>

                        <Form.Item
                            label="Location"
                            name="location"
                            rules={[{ required: true, message: 'Please input location' }]}
                        >
                            <Input placeholder='Location' />
                        </Form.Item>

                        <Form.Item
                            label="Age"
                            name="age"
                            rules={[{ required: true, message: 'Please input age' }]}
                        >
                            <InputNumber placeholder='Age' min={1} max={100} style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item
                            label="State"
                            name="state"
                            rules={[{ required: true, message: 'Please select state' }]}
                        >
                            <Select
                                showSearch
                                placeholder="Select State"
                                optionFilterProp="label"
                                options={statesList}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Gender"
                            name="gender">
                            <Radio.Group options={genderOptions} onChange={onGenderChange} value={genderData} />
                        </Form.Item>

                        <Form.Item
                            label={
                                <span style={{ textWrap: 'wrap', height: '70px' }}>Select Place Type to Visit</span>
                            }
                            name="placeType"
                        >
                            <Checkbox.Group options={placeTypeList} />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Space size={"small"}>

                                {/* // submit -> editedObj empty
                                // update -> editedObj has data */}

                                {
                                    Object.keys(editedObj).length === 0 ? (<Button type="primary" onClick={onSubmit}>
                                        Submit
                                    </Button>) : (<Button type="primary" onClick={onUpdate}>
                                        Update
                                    </Button>)
                                }


                                <Button type="primary" htmlType="reset" className='danger-button-bg'>
                                    Reset
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
        </>)
}

export default TouristForm;
import { Input, InputNumber, Select, Radio, Checkbox, Form, Button, Space } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { GenderList, PlaceType, StatesList } from '../../../model/tourist.modal';
import { TouristContext } from '../touristContext';

const TouristForm = () => {
    const [form] = Form.useForm();
    const statesList: StatesList[] = [{ label: 'Telangana', value: 'TL' }, { label: 'Andhra Pradesh', value: 'AP' }, { label: 'Delhi', value: 'Delhi' }];
    const genderOptions: GenderList[] = [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }];
    const placeTypeList: PlaceType[] = [{ label: 'Public Visit', value: 'public' }, { label: 'Priavate Visit', value: 'private' }];
    const [genderData, setGender] = useState<string>('male');
    const { touristList, setTouristList, editedObj, setEditedObj, setModalConfig, modalActions } = useContext<any>(TouristContext);

    useEffect(() => {
        if (editedObj) {
            const { name, location, age, state, gender, placeType } = editedObj;
            form.setFieldsValue({
                name,
                location,
                age,
                state,
                gender,
                placeType
            })
        }
    }, [editedObj]);


    const onGenderChange = ({ target: { value } }: any) => {
        // setGender(value)
    }

    useEffect(() => {
        if (modalActions && modalActions === 'OK') {
            form.resetFields();
        }
    }, [modalActions])

    const onSubmit = () => {
        setModalConfig({
            modalTitle: `Do you want to submit the tourist details of ${form.getFieldsValue()?.name}?`,
            isModalOpen: true,
            action: 'SUBMIT',
            data: form.getFieldsValue()
        })
    }

    const onUpdate = () => {
        setModalConfig({
            modalTitle: `Do you want to update the tourist details of ${form.getFieldsValue()?.name}?`,
            isModalOpen: true,
            action: 'UPDATE',
            data: form.getFieldsValue()
        })
    }

    return (<>
        <div className='curd-item-container'>
            <div>
                <h2> {editedObj && Object.keys(editedObj)?.length !== 0 ? 'Edit' : 'Add'} Tourist Details</h2>
            </div>
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
                            !editedObj || Object?.keys(editedObj)?.length == 0 ? (<Button type="primary" onClick={onSubmit}>
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
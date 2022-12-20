import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Upload,
  Space,
  Card,
} from 'antd'
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

const { TextArea } = Input

const UploadTest = () => {

  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as RcFile)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  const viewFile = () => {
    console.log(fileList)
  }

  return (
    <div style={{ padding: 24, textAlign: 'center', background: 'white', minHeight: '80vh' }}>
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Card title="test" size="default" style={{ minHeight: '70vh' }}>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}        
            layout="horizontal"
          >
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="TextArea">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList">
            <ImgCrop rotate>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                maxCount={5}
              >
                {fileList.length < 5 && '+ Upload'}
              </Upload>
            </ImgCrop>
            </Form.Item>
            <Form.Item label="Button">
              <Button block onClick={viewFile}>Button</Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  )
}

export default UploadTest
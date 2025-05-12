
// import React, { useEffect } from 'react';
// import { Form, Input, Upload, Button, message, Card } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import { useParams } from 'react-router-dom';
// import ApiService from '../services/ApiService';
// import axios from 'axios';

// const { TextArea } = Input;

// const BlogForm: React.FC = () => {
//   const [form] = Form.useForm();
//   const { id } = useParams(); // Get blog ID from URL if editing

//   useEffect(() => {
//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   // const fetchBlog = async () => {
//   //   try {
//   //     const res = await ApiService.get(`/blogs/${id}`);
//   //     const blog = res.data.data;
//   //     form.setFieldsValue({
//   //       title: blog.title,
//   //       subtitle: blog.subtitle,
//   //       tags: blog.tags,
//   //       content: blog.content,
//   //       // photo is skipped here – user can re-upload it if needed
//   //     });
//   //   } catch (err) {
//   //     message.error('Failed to load blog for editing');
//   //   }
//   // };
//   const fetchBlog = async () => {
//     try {
//       const res = await ApiService.get(`/blogs/${id}`);
//       const blog = res.data.data;

//       // Set form values
//       form.setFieldsValue({
//         title: blog.title,
//         subtitle: blog.subtitle,
//         tags: blog.tags,
//         content: blog.content,
//         photo: [
//           {
//             uid: '-1',
//             name: blog.image,
//             status: 'done',
//             url: blog.fileUrl,
//           },
//         ],
//       });
//     } catch (err) {
//       console.error(err);
//       message.error('Failed to load blog for editing');
//     }
//   };

//   const normFile = (e: any) => {
//     if (Array.isArray(e)) return e;
//     return e?.fileList;
//   };

//   const onFinish = async (values: any) => {
//     const formData = new FormData();
//     formData.append('title', values.title);
//     formData.append('subtitle', values.subtitle || '');
//     formData.append('tags', values.tags || '');
//     formData.append('content', values.content || '');

//     if (values.photo?.[0]?.originFileObj) {
//       formData.append('image', values.photo[0].originFileObj);
//     }

//     try {
//       if (id) {
//         // update
//         await ApiService.put(`/blogs/${id}`, formData);
//         message.success('Blog updated successfully!');
//       } else {
//         // create
//         await ApiService.post('/blogs/create', formData);
//         message.success('Blog submitted successfully!');
//       }
//       form.resetFields();
//     } catch (err) {
//       console.error(err);
//       message.error(id ? 'Failed to update blog' : 'Failed to submit blog');
//     }
//   };

//   return (
//     <Card title={id ? 'Edit Blog Post' : 'Create Blog Post'} style={{ maxWidth: 600, margin: '0 auto' }}>
//       <Form form={form} layout="vertical" onFinish={onFinish}>
//         <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter a blog title' }]}>
//           <Input placeholder="Enter blog title" />
//         </Form.Item>

//         <Form.Item label="Subtitle" name="subtitle" rules={[{ required: true, message: 'Please enter a subtitle' }]}>
//           <Input placeholder="Enter subtitle" />
//         </Form.Item>

//         <Form.Item label="Tags (comma-separated)" name="tags">
//           <Input placeholder="e.g., tech, programming, life" />
//         </Form.Item>

//         <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please enter blog content' }]}>
//           <TextArea rows={6} placeholder="Write your blog post content here..." />
//         </Form.Item>

//         <Form.Item
//           label="Photo Upload"
//           name="photo"
//           valuePropName="fileList"
//           getValueFromEvent={normFile}
//         >
//           <Upload name="image" listType="picture" beforeUpload={() => false} maxCount={1}>
//             <Button icon={<UploadOutlined />}>Click to Upload</Button>
//           </Upload>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" block>
//             {id ? 'Update Blog' : 'Submit Blog'}
//           </Button>
//         </Form.Item>
//       </Form>
//     </Card>
//   );
// };

// export default BlogForm;

import React, { useRef, useEffect } from 'react';
import { Form, Input, Upload, Button, message, Card, Space, Tooltip } from 'antd';
import { BlockOutlined, BoldOutlined, ItalicOutlined, LinkOutlined, OrderedListOutlined, PictureOutlined, RedoOutlined, UnderlineOutlined, UndoOutlined, UnorderedListOutlined, UploadOutlined, VerticalLeftOutlined, VerticalRightOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import ApiService from '../services/ApiService';
import type { UploadFile } from 'antd/es/upload/interface';

type FormValues = {
  title: string;
  subtitle: string;
  tags: string;
  photo?: UploadFile[];
};

const BlogForm: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const insertLink = () => {
    const url = prompt('Enter the URL');
    if (url) {
      format('createLink', url);
    }
  };

  const insertImage = () => {
    const imageUrl = prompt('Enter the image URL');
    if (imageUrl) {
      format('insertImage', imageUrl);
    }
  };

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const res = await ApiService.get(`/blogs/${id}`);
        const blog = res.data;
        form.setFieldsValue({
          title: blog.title,
          subtitle: blog.subtitle,
          tags: blog.tags,
          photo: blog.fileUrl
            ? [{
              uid: '-1',
              name: blog.image,
              status: 'done',
              url: blog.fileUrl,
            }]
            : undefined,
        });
        if (contentRef.current) {
          contentRef.current.innerHTML = blog.content;
        }
      } catch (err) {
        message.error('Failed to load blog for editing');
      }
    })();
  }, [id, form]);

  const normFile = (e: any) => (Array.isArray(e) ? e : e?.fileList);

  const format = (cmd: string, value?: string) => {
    document.execCommand(cmd, false, value);
  };



  const onFinish = async (values: FormValues) => {
    const content = contentRef.current?.innerHTML || '';
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('subtitle', values.subtitle);
    formData.append('tags', values.tags);
    formData.append('content', content);

    if (values.photo && values.photo[0]?.originFileObj) {
      formData.append('image', values.photo[0].originFileObj);
    }

    try {
      if (id) {
        await ApiService.put(`/blogs/${id}`, formData);
        message.success('Blog updated successfully!');
      } else {
        await ApiService.post('/blogs/create', formData);
        message.success('Blog submitted successfully!');
      }
      navigate('/blogTable');
    } catch (err) {
      message.error(id ? 'Failed to update blog' : 'Failed to submit blog');
    }
  };

  return (
    <Card title={id ? 'Edit Blog Post' : 'Create Blog Post'} style={{ maxWidth: 900, margin: '0 auto' }}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Enter blog title' }]}>
          <Input placeholder="Blog title" />
        </Form.Item>

        <Form.Item name="subtitle" label="Subtitle" rules={[{ required: true, message: 'Enter subtitle' }]}>
          <Input placeholder="Subtitle" />
        </Form.Item>

        <Form.Item name="tags" label="Tags (comma-separated)">
          <Input placeholder="e.g., tech, javascript" />
        </Form.Item>
        <div style={{ marginBottom: '8px' }}>
          <Tooltip title="Bold (Ctrl+B)">
            <Button icon={<BoldOutlined />} onClick={() => format('bold')} />
          </Tooltip>
          <Tooltip title="Italic (Ctrl+I)">
            <Button icon={<ItalicOutlined />} onClick={() => format('italic')} />
          </Tooltip>
          <Tooltip title="Underline (Ctrl+U)">
            <Button icon={<UnderlineOutlined />} onClick={() => format('underline')} />
          </Tooltip>
          <Tooltip title="Bullet List">
            <Button icon={<UnorderedListOutlined />} onClick={() => format('insertUnorderedList')} />
          </Tooltip>
          <Tooltip title="Numbered List">
            <Button icon={<OrderedListOutlined />} onClick={() => format('insertOrderedList')} />
          </Tooltip>
          <Tooltip title="Decrease Indent">
            <Button icon={<VerticalLeftOutlined />} onClick={() => format('outdent')} />
          </Tooltip>
          <Tooltip title="Increase Indent">
            <Button icon={<VerticalRightOutlined />} onClick={() => format('indent')} />
          </Tooltip>
          <Tooltip title="Insert Link (Ctrl+K)">
            <Button icon={<LinkOutlined />} onClick={() => insertLink()} />
          </Tooltip>
          <Tooltip title="Insert Image">
            <Button icon={<PictureOutlined />} onClick={() => insertImage()} />
          </Tooltip>
          <Tooltip title="Block Quote">
            <Button icon={<BlockOutlined />} onClick={() => format('formatBlock', '<blockquote>')} />
          </Tooltip>
          <Tooltip title="Undo (Ctrl+Z)">
            <Button icon={<UndoOutlined />} onClick={() => format('undo')} />
          </Tooltip>
          <Tooltip title="Redo (Ctrl+Y)">
            <Button icon={<RedoOutlined />} onClick={() => format('redo')} />
          </Tooltip>
        </div>



        <div
          ref={contentRef}
          contentEditable
          style={{
            minHeight: '200px',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '4px',
            backgroundColor: '#fff',
          }}
        ></div>


        <Form.Item
          name="photo"
          label="Photo Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="image" listType="picture" beforeUpload={() => false} maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              {id ? 'Update Blog' : 'Submit Blog'}
            </Button>
            <Button onClick={() => navigate('/blogTable')}>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BlogForm;

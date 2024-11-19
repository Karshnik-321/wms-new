import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuillEditor(props) {
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (content) => {
    setContent(content);

    // Remove HTML tags and split by whitespace or new lines
    const textOnly = content.replace(/<[^>]+>/g, '');
    
    // Count words and lines
    const words = textOnly.trim().split(/\s+/).filter(Boolean); // Count words
    const lines = textOnly.split(/\n/).filter(line => line.trim().length > 0); // Count non-empty lines

    // Total count is sum of words and non-empty lines
    setWordCount(words.length + lines.length);
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ]
  };

  return (
    <>
      <div className='quill-editor block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-400 sm:text-sm/6'>
        <ReactQuill
          value={content}
          onChange={handleChange}
          modules={modules}
          theme="snow"
          placeholder={props.placeholder}
        />
        <p className='text-gray-600 text-xs text-right p-2'>Word Count: {wordCount}</p>
      </div>
      <style jsx>{`
        .ql-toolbar.ql-snow,.ql-container.ql-snow{ border: none !important;}
      `}</style>
    </>
  );
}

export default QuillEditor;

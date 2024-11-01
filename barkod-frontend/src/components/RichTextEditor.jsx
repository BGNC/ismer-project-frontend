
import React from 'react';

function RichTextEditor({ onChange }) {
  return (
    <textarea
      placeholder="Barkod numaralarını buraya girin..."
      style={{ width: '100%', height: '150px' }}
      onChange={onChange}
    />
  );
}

export default RichTextEditor;

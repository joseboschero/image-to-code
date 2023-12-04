"use client";

import { useState } from "react";
import { Dropzone, ExtFile /* FileMosaic */ } from "@files-ui/react";

export const DragAndDrop = ({
  transformImageToCode,
}: {
  transformImageToCode: (file: File) => Promise<void>;
}) => {
  /* const [files, setFiles] = useState<ExtFile[]>([]); */

  const updateFiles = (files: ExtFile[]) => {
    /* setFiles(files); */
    const file = files[0].file;
    if (file != null) transformImageToCode(file);
  };

  return (
    <>
      <Dropzone
        header={false}
        footer={false}
        maxFiles={1}
        label="Drag here your image"
        accept="image/*"
        onChange={updateFiles}
      />
      {/* Image preview*/}

      {/* {files?.map((file, index) => {
        return <FileMosaic key={index} {...file} preview />;
      })} */}
    </>
  );
};

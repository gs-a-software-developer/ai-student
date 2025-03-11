// fileIcons.js
import {
  FilePdf,
  FileJs,
  FileTxt,
  FileX,
  FileC,
  FileCSharp,
  FileCode,
  FileCpp,
  FileCss,
  FileCsv,
  FileDoc,
  FileHtml,
} from "@phosphor-icons/react";

const fileIcons = {
  pdf: <FilePdf size={28} color="#007aff" weight="bold" />,
  js: <FileJs size={28} color="#007aff" weight="bold" />,
  txt: <FileTxt size={28} color="#007aff" weight="bold" />,
  xls: <FileX size={28} color="#007aff" weight="bold" />,
  c: <FileC size={28} color="#007aff" weight="bold" />,
  csharp: <FileCSharp size={28} color="#007aff" weight="bold" />,
  code: <FileCode size={28} color="#007aff" weight="bold" />,
  cpp: <FileCpp size={28} color="#007aff" weight="bold" />,
  css: <FileCss size={28} color="#007aff" weight="bold" />,
  csv: <FileCsv size={28} color="#007aff" weight="bold" />,
  doc: <FileDoc size={28} color="#007aff" weight="bold" />,
  html: <FileHtml size={28} color="#007aff" weight="bold" />,
};

// Default fallback icon
export const getFileIcon = (type) =>
  fileIcons[type] || <FileCode size={28} color="#007aff" weight="bold" />;

export default fileIcons;

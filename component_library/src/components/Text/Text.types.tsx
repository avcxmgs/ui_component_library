export interface TextProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    children: React.ReactNode;
    disabled?: boolean;
  }
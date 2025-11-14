import { parseISO, format } from 'date-fns';
import { CSSProperties } from 'react';

interface IDateFormatterProps {
  dateString: string;
  customStyles?: CSSProperties;
}

export const DateFormatter = ({
  dateString,
  customStyles,
}: IDateFormatterProps) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} style={customStyles}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
};

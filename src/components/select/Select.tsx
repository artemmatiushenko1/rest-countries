import { FC } from 'react';
import {
  Select as MuiSelect,
  MenuItem,
  SelectChangeEvent,
  SxProps,
} from '@mui/material';
import { useTheme } from '@mui/system';
import { ISelectOption } from 'interfaces/select-option';
import ExpandLessIcon from '@mui/icons-material/ExpandMore';
import * as S from './Select.style';

interface ISelectProps {
  options: ISelectOption[];
  placeholder: string;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
  sx?: SxProps;
}

const Select: FC<ISelectProps> = ({
  options,
  placeholder,
  value,
  onChange,
  sx,
}) => {
  const { palette } = useTheme();

  return (
    <MuiSelect
      displayEmpty
      value={value}
      onChange={onChange}
      IconComponent={ExpandLessIcon}
      input={<S.StyledInputBase />}
      renderValue={(selected: typeof value) => {
        return selected.trim() === '' ? (
          <p>{placeholder}</p>
        ) : (
          <p>
            {options.find((option) => option.value === selected)?.displayText}
          </p>
        );
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: palette.secondary.main,
            marginTop: '5px',
            boxShadow: '0px 1px 10px -2px rgb(0, 0, 0, 0.05)',
          },
        },
      }}
      sx={sx}
    >
      {options.map((option) => {
        return (
          <MenuItem
            sx={{ fontSize: '14px' }}
            key={option.displayText}
            value={option.value}
          >
            {option.displayText}
          </MenuItem>
        );
      })}
    </MuiSelect>
  );
};

export default Select;

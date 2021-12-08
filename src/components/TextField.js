import React from 'react';
import {TextField} from '@material-ui/core';
import {useController} from 'react-hook-form';

const InputForm = ({control, name, onChange: onChangeProps, ...inputProps}) => {
  const {
    field: {ref, ...textFieldProps},
  } = useController({
    name,
    control,
  });
  const props = {
    ...textFieldProps,
    ...inputProps,
    inputRef: ref,
  };

  if (onChangeProps) {
    props.onChange = (e) => {
      onChangeProps(e);
    };
  }

  return <TextField {...props} inputRef={ref} />;
};

const InputWrapper = ({withHookForm, control, name, ...inputProps}) => {
  if (withHookForm) {
    return <InputForm control={control} name={name} {...inputProps} />;
  }

  return <TextField name={name} {...inputProps} />;
};

InputWrapper.defaultProps = {
  withHookForm: true,
};

export default InputWrapper;

import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    FormErrorIcon,
    FormErrorMessage,
    Select,
    Text,
  } from '@chakra-ui/react';

  import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from "@chakra-ui/react";

  import { useState } from 'react';
  import * as yup from 'yup';
  import { useForm } from 'react-hook-form';
  import { yupResolver } from '@hookform/resolvers/yup';
  
  import { useDispatch } from 'react-redux';
  import { reportRegisterThunk } from '../../store/modules/api/thunks';
  import { useSelector } from 'react-redux';
  
  const FormReport = ({dogId, onClose}) => {
    const loginSchema = yup.object().shape({
      dogId: yup.string(dogId),
      action: yup.string().required(),
      title: yup.string().required(),
      date: yup.string().required(),
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(loginSchema),
    });
  
  
    const token = useSelector(state => state.user.profile.token);
    const dispatch = useDispatch();
    const onSubmitFunction = data => {
        dispatch(reportRegisterThunk(token, data.dogId, data.action, data.title, data.notes, data.date));
        onClose();
      };
  
    
    return (
      <Box color="#2A4058" padding="20px" borderRadius="15px">
        <Flex color="#2A4058" >
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            
          <FormControl isInvalid={errors.dogId}>
              <FormLabel color="#2A4058" marginTop="5px" htmlFor="dogId">
                Dog:{' '}
              </FormLabel>
              <Input
              value={dogId}
                placeholder=""
                borderColor="#2A4058"
                id="dogId"
                {...register('dogId')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.dogId && errors.dogId.message}
              </FormErrorMessage>
            </FormControl>
  

            <FormControl padding="12px" isInvalid={errors.action}>
            <FormLabel htmlFor="action">Tipo:</FormLabel>
            <Select {...register('action')} id="action">
              <option value="1">Vacina</option>
              <option value="2">Verm??fugo</option>
              <option value="3">Nutri????o</option>
              <option value="4">Medicamento</option>
              <option value="5">Exame</option>
              <option value="6">Alergia</option>
              <option value="7">Doen??a</option>
              <option value="8">Procedimento</option>
              <option value="9">Outros</option>
            </Select>
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.action && errors.action.message}
            </FormErrorMessage>
          </FormControl>

            <FormControl isInvalid={errors.title}>
              <FormLabel color="#2A4058" marginTop="5px" htmlFor="title">
              T??tulo:{' '}
              </FormLabel>
              <Input
                placeholder=""
                borderColor="#2A4058"
                id="title"
                {...register('title')}
              />
              <FormErrorMessage>
                <FormErrorIcon />
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>
            
  
            <FormLabel color="#2A4058" marginTop="5px" htmlFor="notes">
              Observa????o:
            </FormLabel>

            <Editable defaultValue='Efeitos e M??dico Veterin??rio respons??vel.'>
            <EditablePreview />
            <EditableTextarea
                as={'textarea'}
                placeholder=""
                {...register('notes')}
                height="80px"
            />
            </Editable>

  
           <FormControl padding="12px" isInvalid={errors.date}>
            <FormLabel>Data:</FormLabel>
            <Input
              type="date"
              borderColor="#2A4058"
              width="100%"
              placeholder=""
              {...register('date')}
            />
            <FormErrorMessage>
              <FormErrorIcon />
              {errors.date && errors.date.message}
            </FormErrorMessage>
            </FormControl>

            <Button type="submit" width="100%" >
              Enviar
            </Button>
          </form>
        </Flex>
      </Box>
    );
  };
  export default FormReport;
  
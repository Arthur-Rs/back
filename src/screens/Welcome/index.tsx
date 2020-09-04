import React, {useState, useCallback, useRef} from 'react';
import {TouchableOpacity, Vibration, View, ScrollView} from 'react-native';

import ImagePicker, {Options} from 'react-native-image-crop-picker';

import {request, RESULTS, check, PERMISSIONS} from 'react-native-permissions';

import {FormHandles} from '@unform/core';

import * as yup from 'yup';

import {
  Container,
  Profile,
  ImageProfile,
  TextProfile,
  Form,
  IconAddImage,
  Button,
} from './styles';

import {useTheme} from '../../hooks/useTheme';
import {useProfile} from '../../hooks/useProfile';

import ProfileImg from '../../assets/images/profile.jpeg';

import Input from '../../components/form/Input';
import Picker from '../../components/form/Picker';
import {getValidationErrors} from '../../utils/get-validation-erros';

const Welcome: React.FC = () => {
  const {theme, alterTheme} = useTheme();
  const {saveProfile} = useProfile();

  const [message, setMessage] = useState('Bem-vindo!');
  const [image, setImage] = useState<string>('');

  const formRef = useRef<FormHandles>(null);

  const handleToSubmit = useCallback(
    async (data) => {
      console.log(data);
      try {
        const schema = yup.object().shape({
          name: yup.string().required('É necessário preencher o nome'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await saveProfile({
          name: data.name,
          image: image || 'default',
          theme: theme.name,
        });
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          Vibration.vibrate([0, 100, 150, 300]);
        }
      }
    },
    [image, saveProfile, theme.name],
  );

  const handlePressButton = useCallback(() => {
    console.log('oie');
    formRef.current?.submitForm();
  }, []);

  const handleImagemPicker = useCallback(async () => {
    const permissionStorage = await check(
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    );

    if (permissionStorage !== RESULTS.GRANTED) {
      const response = await request(
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      );
      if (response !== RESULTS.GRANTED) {
        return;
      }
    }

    const imagePickerOption: Options = {
      compressImageMaxHeight: 512,
      compressImageMaxWidth: 512,
      cropping: true,
      cropperToolbarColor: theme.colors.background,
      cropperStatusBarColor: theme.colors.background,
      cropperTintColor: theme.colors.text,
      cropperToolbarWidgetColor: theme.colors.text,
      cropperActiveWidgetColor: theme.colors.primary,
      cropperToolbarTitle: 'Editor',
      loadingLabelText: 'Processando...',
      cropperCancelText: 'Cancelar',
      cropperChooseText: 'Escolha',
      waitAnimationEnd: true,
      useFrontCamera: true,
      cropperCircleOverlay: true,
      avoidEmptySpaceAroundImage: true,
      compressImageQuality: 0.6,
      mediaType: 'photo',

      includeBase64: true,
      multiple: false,
    };

    ImagePicker.openPicker(imagePickerOption).then((data) => {
      setImage(`data:image/gif;base64,${data.data}`);
    });
  }, [theme.colors.background, theme.colors.primary, theme.colors.text]);

  const handleSelectTheme = useCallback(
    async (value) => {
      await alterTheme(value);
    },
    [alterTheme],
  );

  const handleInput = useCallback((text: string) => {
    if (text) {
      setMessage(`Bem-vindo, ${text}!`);
      return;
    }

    setMessage('Bem-vindo!');
  }, []);

  return (
    <ScrollView>
      <Container>
        <Profile>
          <TouchableOpacity onPress={handleImagemPicker}>
            <ImageProfile source={image ? {uri: image} : ProfileImg} />
            <IconAddImage width="38px" />
          </TouchableOpacity>
          <TextProfile>{message}</TextProfile>
        </Profile>

        <Form ref={formRef} onSubmit={handleToSubmit}>
          <View>
            <Input
              title="Nome"
              field="name"
              maxLength={12}
              onChangeText={handleInput}
            />
            <Picker
              name="Tema"
              selectedValue={theme.name}
              onValueChange={handleSelectTheme}
              data={[
                {label: 'Escuro', value: 'dark'},
                {label: 'Claro', value: 'light'},
              ]}
            />
          </View>
          <View>
            <Button key="button" name="Entrar" onPress={handlePressButton} />
          </View>
        </Form>
      </Container>
    </ScrollView>
  );
};

export default Welcome;

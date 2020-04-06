import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { FormInput } from './';
import { theme, global } from '../../styles';
const StoryComponent = (props) => {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: theme.space.default }}>
        <FormInput value={text} onChangeText={handleChange} {...props} />
      </View>
    </SafeAreaView>
  );
};

storiesOf('FormInput', module)
  .add('default', () => <StoryComponent />)
  .add('password', () => (
    <View style={global.flex}>
      <StoryComponent />
      <StoryComponent secureTextEntry />
    </View>
  ))
  .add('errors', () => (
    <View style={global.flex}>
      <StoryComponent />
      <StoryComponent hasErrors errorMessage={'fucking shit balls asshole'} />
    </View>
  ));

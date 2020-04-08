import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import inputStyles from './FormInput.styles';
import { theme } from '../../styles';
import { OsText } from '../OsText';
import Icon from 'react-native-vector-icons/Ionicons';

export const FormInput = (props) => {
  const { height, hasErrors, errorMessage } = props;
  const [active, setActive] = useState(false);

  const renderStyles = () => {
    if (hasErrors) {
      return inputStyles.error;
    }
    if (active) {
      return inputStyles.active;
    } else {
      return inputStyles.inactive;
    }
  };

  const renderIcon = () => {
    if (hasErrors) {
      return <Icon name="ios-alert" color={theme.palette.alert} size={17} />;
    }
  };

  const renderErrorMessage = () => {
    if (hasErrors) {
      return (
        <OsText
          text={errorMessage}
          color={theme.palette.alert}
          weight="bold"
          size="smedium"
        />
      );
    }
  };

  return (
    <View>
      <TextInput
        {...props}
        style={renderStyles()}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        placeholderTextColor={theme.palette.greyLight}
      />
      <View style={inputStyles.errorContainer}>
        <View style={inputStyles.icon}>{renderIcon()}</View>
        {renderErrorMessage()}
      </View>
    </View>
  );
};

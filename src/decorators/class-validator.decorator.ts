import { Matches } from 'class-validator';
import { IS_EMAIL, IS_PASSWORD, IS_PHONE } from 'src/common/constants/message.constant';
import { EMAIL_REGEX, PASSWORD_REGEX, PHONE_REGEX } from 'src/common/constants/regex.constant';

export const IsPassword = () => Matches(PASSWORD_REGEX, { message: IS_PASSWORD });

export const IsEmail = () => Matches(EMAIL_REGEX, { message: IS_EMAIL });

export const IsPhone = () => Matches(PHONE_REGEX, { message: IS_PHONE });
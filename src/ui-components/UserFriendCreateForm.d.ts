/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserFriendCreateFormInputValues = {
    friendID?: string;
    userID?: string;
};
export declare type UserFriendCreateFormValidationValues = {
    friendID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserFriendCreateFormOverridesProps = {
    UserFriendCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    friendID?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserFriendCreateFormProps = React.PropsWithChildren<{
    overrides?: UserFriendCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserFriendCreateFormInputValues) => UserFriendCreateFormInputValues;
    onSuccess?: (fields: UserFriendCreateFormInputValues) => void;
    onError?: (fields: UserFriendCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserFriendCreateFormInputValues) => UserFriendCreateFormInputValues;
    onValidate?: UserFriendCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserFriendCreateForm(props: UserFriendCreateFormProps): React.ReactElement;

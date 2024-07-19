/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ChatFolder } from "../API.ts";
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
export declare type ChatFolderUpdateFormInputValues = {
    name?: string;
};
export declare type ChatFolderUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatFolderUpdateFormOverridesProps = {
    ChatFolderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChatFolderUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChatFolderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    chatFolder?: ChatFolder;
    onSubmit?: (fields: ChatFolderUpdateFormInputValues) => ChatFolderUpdateFormInputValues;
    onSuccess?: (fields: ChatFolderUpdateFormInputValues) => void;
    onError?: (fields: ChatFolderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatFolderUpdateFormInputValues) => ChatFolderUpdateFormInputValues;
    onValidate?: ChatFolderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChatFolderUpdateForm(props: ChatFolderUpdateFormProps): React.ReactElement;

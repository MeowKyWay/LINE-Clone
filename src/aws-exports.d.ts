declare const awsmobile: {
    aws_project_region: string;
    aws_cognito_identity_pool_id?: string;
    aws_cognito_region?: string;
    aws_user_pools_id?: string;
    aws_user_pools_web_client_id?: string;
    oauth?: {
      domain: string;
      scope: string[];
      redirectSignIn: string;
      redirectSignOut: string;
      responseType: string;
    };
    aws_appsync_graphqlEndpoint?: string;
    aws_appsync_region?: string;
    aws_appsync_authenticationType?: string;
    aws_user_files_s3_bucket?: string;
    aws_user_files_s3_bucket_region?: string;
    [key: string]: any; // Add this line to account for any additional dynamic keys
  };
  
  export default awsmobile;
  
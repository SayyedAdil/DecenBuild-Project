export const CREATE_POST = `
mutation($request: CreatePublicPostRequest!) { 
  createPostTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        PostWithSig {
          name
          type
        }
      }
    domain {
      name
      chainId
      version
      verifyingContract
    }
    value {
      nonce
      deadline
      profileId
      contentURI
      collectModule
      collectModuleInitData
      referenceModule
      referenceModuleInitData
    }
   }
 }
}
`;

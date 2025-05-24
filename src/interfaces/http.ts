export interface CommonParams {
  path: string;
  queryParams?: Record<string, any>;
  signal?: AbortSignal;
}

export interface GetParams extends CommonParams {}

export interface PostParams extends CommonParams {
  requestBody: any;
  options?: any;
}

export interface PutParams extends CommonParams {
  requestBody: any;
}

export interface PatchParams extends CommonParams {
  requestBody: any;
}

export interface DeleteParams extends CommonParams {
  requestBody: any;
}

/**
 * Generated by orval v6.6.2 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  UseMutationOptions,
  MutationFunction
} from 'react-query'
import type {
  Pet,
  Error,
  CreatePetsBody
} from './models'
import { customInstance } from './custom-instance'
import { customFormUrlEncoded } from './custom-form-url-encoded'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


/**
 * @summary Create a pet
 */
export const createPets = (
    createPetsBody: CreatePetsBody,
 ) => {const formUrlEncoded = customFormUrlEncoded(createPetsBody)
      return customInstance<Pet>(
      {url: `/pets`, method: 'post',
       data: formUrlEncoded
    },
      );
    }
  


    export const useCreatePets = <TError = Error,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof createPets>, TError,{data: CreatePetsBody}, TContext>, }
) => {
      const {mutation: mutationOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof createPets>, {data: CreatePetsBody}> = (props) => {
          const {data} = props || {};

          return  createPets(data,)
        }

      return useMutation<AsyncReturnType<typeof createPets>, TError, {data: CreatePetsBody}, TContext>(mutationFn, mutationOptions)
    }
    

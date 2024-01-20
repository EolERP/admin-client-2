import type {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: './schema.gql',
    documents: './src/**/*.gql',
    generates: {
        './src/lib/graphql/generated.ts': {
            plugins: ['typescript', 'typescript-operations', 'graphql-codegen-svelte-apollo'],
            config: {
                clientPath: '../apollo-client',
            },
        },
    },
}

export default config
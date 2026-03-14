import { createSession } from '../createSession'

export async function POST() {
    return await createSession({
        createAgentTask: {
            taskType: 'MEMORY_CHAT_COMPLETION',
            guardRails: {
                memoryTypes: [
                    {
                        memoryTypeId: 'mty_3dd204c202ae411f948a72ecb720a701',
                        memoryIds: ['mem_d61da23d920c4947ad06d4c189370cf4'],
                    },
                ],
            },
        },
    })
}

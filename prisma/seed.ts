import { PrismaClient, Prisma } from '@prisma/client'
import { randomUUID } from 'crypto'

const prisma = new PrismaClient()

const tasks = [{
  title: 'api',
  description: '  一个基于 React 的简单的 API 文档示例',
  status: 'toDo',
  createdBy: ' admin ',
  priority: 'low',
},
{
  title: '  remote-data-fetching',
  description: ' 1.centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ',
  status: 'inProgress',
  createdBy: '',
  priority: 'high',
},
{
  title: ' mulang also',
  description: ' era uma das mais famosas e mais importantes das literaturas do século XX. Foi um leitor de textos em que o texto foi dividido em secções, e cada secção foi dividida em parágrafos. ',
  status: 'done',
  createdBy: '',
  priority: 'medium',
},
]

async function main() {
  for (let index = 0; index < tasks.length; index++) {
    await prisma.task.create({ data: tasks[index] })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
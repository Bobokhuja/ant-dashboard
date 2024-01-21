import { message } from 'antd'

export const Page = () => {
  return (
    <div>
      <button
        onClick={() => {
          message.success('Hello')
        }}
      >
        click
      </button>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eius,
      esse, est impedit, nisi non numquam quisquam repellendus rerum saepe totam
      vel? Ad asperiores deleniti dolor ipsum labore laboriosam, mollitia
      nostrum, qui quidem reprehenderit sequi tenetur voluptate, voluptatem
      voluptates voluptatibus? Assumenda distinctio expedita pariatur ullam
      voluptas. Corporis quos saepe sit.
    </div>
  )
}

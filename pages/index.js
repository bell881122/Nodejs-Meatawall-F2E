import BasicLayout from './_basicLayout';
import Post from '../components/Post'

export default function Home() {
  return (
    <BasicLayout>
      <Post />
      <Post data={{
        txt: `外面看起來就超冷....
          我決定回被窩繼續睡....>.<`}} />
    </BasicLayout>
  )
}
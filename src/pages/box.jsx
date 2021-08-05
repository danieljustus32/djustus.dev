import Instructions from '@/components/dom/Instructions'
import Navbar from '@/components/Navbar/Navbar'
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = () => {
  return (
    <>
      <Navbar />
      <Box r3f route='/' />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}

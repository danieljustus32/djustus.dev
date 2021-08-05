import dynamic from 'next/dynamic'
// Step 5 - delete Instructions components
import Navbar from '../components/Navbar/Navbar'

// Step 2 - update Box components
const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = () => {
  return (
    <>
      <Navbar />
      <Box r3f route='/box' />
      <div className='h-screen'></div>
      <main
        id='portfolio'
        className='flex justify-center items-center w-screen h-screen flex-col'
      >
        <h1 className='h-40 mx-auto my-10 font-sans text-6xl text-black'>
          Hi there!
        </h1>
        <p className='w-3/4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pellentesque urna ut arcu vulputate molestie. Pellentesque scelerisque
          id turpis sed facilisis. Aliquam posuere iaculis augue. Fusce sit amet
          nibh nulla. Curabitur id orci a urna volutpat laoreet non et urna.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Quisque pulvinar tempor leo, vel fermentum
          tortor ullamcorper vitae. Quisque efficitur, quam sed malesuada
          malesuada, ipsum nibh mollis tortor, sit amet ullamcorper ante felis
          quis ex. Aenean nunc magna, consectetur vitae orci quis, aliquam
          blandit lectus. Maecenas et magna vitae quam convallis placerat. Morbi
          efficitur metus ac lorem sagittis mattis. Duis in scelerisque ligula.
          Pellentesque suscipit ipsum eu sapien rhoncus lacinia a pharetra arcu.
          Etiam sit amet consequat magna. Proin arcu augue, rhoncus nec cursus
          rutrum, ornare non nibh. Donec condimentum dapibus finibus. Nullam
          rhoncus tellus ex, pellentesque ornare elit interdum et. Curabitur
          venenatis dignissim lacus, vitae vehicula lorem eleifend nec. Nulla
          sit amet porta diam, non varius ligula. Quisque non nunc sed ex
          sagittis elementum. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Ut tincidunt eros non felis
          mollis, eget suscipit felis fringilla. Ut id lacus sed dui pharetra
          porta non a orci. Nam pharetra nulla in efficitur auctor. Ut commodo
          est nibh, non viverra nisl imperdiet pulvinar. In lacus sem, tristique
          ut odio volutpat, aliquam auctor mi. Mauris vitae eleifend eros, nec
          feugiat metus. Morbi sapien felis, pretium accumsan tristique eu,
          vestibulum non ipsum. Aenean vehicula, dolor vel consectetur porta,
          mauris odio sagittis nibh, ac interdum sapien velit nec ante. Mauris
          efficitur finibus tellus at varius. Donec sed velit at enim finibus
          accumsan. Quisque elementum interdum porttitor. Praesent vulputate
          augue in tempor laoreet. Vestibulum commodo massa sed nulla imperdiet,
          non malesuada elit maximus. Praesent nec nisl semper, ultricies orci
          ut, viverra nisi. Morbi maximus condimentum enim eu consectetur.
          Mauris nulla erat, maximus sed volutpat ut, bibendum a ipsum.
          Suspendisse potenti. Fusce tincidunt nunc laoreet varius tristique.
          Vivamus ante tortor, efficitur iaculis lacinia vitae, sollicitudin in
          dolor. Integer at facilisis purus. Aliquam ut ligula rhoncus, semper
          elit imperdiet, fermentum lacus. Nullam sit amet leo metus. Cras
          iaculis faucibus purus, pellentesque egestas libero posuere pretium.
          Sed lobortis luctus elit a venenatis. Donec eleifend nisl a ante
          faucibus, sed bibendum ante volutpat. Mauris auctor lectus sit amet
          finibus fringilla. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Aliquam molestie felis libero, ut rutrum risus suscipit
          vitae. Phasellus iaculis tempor enim quis rutrum. Nam metus sapien,
          consequat nec dignissim id, dapibus quis metus. Integer in felis
          ornare, varius erat ac, tincidunt lorem. Phasellus eleifend pulvinar
          massa, sit amet luctus justo venenatis quis. Proin ligula nibh,
          placerat a orci ac, efficitur laoreet diam. Cras quam urna, bibendum
          non placerat vitae, maximus eu felis. Nam pellentesque vel mi at
          blandit. Mauris non odio a lectus bibendum viverra sit amet vitae
          mauris. Morbi eleifend metus quis sollicitudin luctus. Duis eu urna
          sem. Ut nisi ex, luctus sit amet iaculis sed, porttitor et metus.
          Nullam non finibus leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Quisque sagittis molestie augue, ac maximus turpis
          cursus sed. Vestibulum venenatis ipsum sit amet viverra semper.
          Vivamus non turpis ut purus eleifend rhoncus. Integer et pulvinar
          odio. Nunc faucibus vulputate ligula.
        </p>
      </main>
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}

import Masonry from './Masonry'

const galleryItems = [
  { id: 1, img: '/Blender/BedRoom.png', height: 500, caption: "Interior Lighting Study" },
  { id: 2, img: '/Blender/Garage.png', height: 450, caption: "Vehicle Asset Showcase" },
  { id: 3, img: '/Blender/FreakyCorridor.png', height: 550, caption: "Game Environment Prototype" },
  { id: 4, img: '/Blender/Barrel.png', height: 500, caption: "Props & Material Texture Setup" },
  { id: 5, img: '/Blender/pillar.png', height: 600, caption: "Architectural Asset" },
  { id: 6, img: '/Blender/pillar-3.png', height: 550, caption: "Procedural Scene Experiment" },
  { id: 7, img: '/Blender/pillar-4.png', height: 500, caption: "Lighting Test" },
  { id: 8, img: '/Blender/pillars.png', height: 600, caption: "Environment Blockout" },
]

const Gallery = () => {
  return (
    <div className="container">
      <div className="gallery">
        <h2 className="section-title gallery__title">3D Gallery</h2>
        <p className="section-subtitle gallery__subtitle">
          High-quality 3D renders and creative explorations crafted in Blender.
        </p>
        <div className="gallery__masonry">
          <Masonry
            items={galleryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="random"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery

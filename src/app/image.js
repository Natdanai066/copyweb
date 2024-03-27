<div className='slideshow'>
<img src={images[index]} alt="" width={1980} height={100} />
<style jsx>{`
  .slideshow {
    position: relative;
    max-width: 100%;
    overflow: hidden;
  }

  .slideshow img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: opacity 60s ease-in-out;
  }
`}</style>
</div>
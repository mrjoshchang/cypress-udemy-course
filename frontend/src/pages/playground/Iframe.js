import BackButton from '../../components/common/BackButton';

const IframePage = () => {
  return (
    <div>
      <BackButton />
      <h2 style={{ textDecoration: 'underline' }}>iFrame Page</h2>

      <iframe
        title="Iframe"
        width="100%"
        height="400px"
        srcDoc={`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Iframe Content</title>
            </head>
            <body>
              <h2>Content Inside Iframe</h2>
              <p>This a paragraph inside the iframe.</p>

              <label>Name: </label>
              <input type="text" placeholder="Enter name here" />
          <div>
          </div>
            </body>
          </html>
        `}
      ></iframe>
    </div>
  );
};

export default IframePage;

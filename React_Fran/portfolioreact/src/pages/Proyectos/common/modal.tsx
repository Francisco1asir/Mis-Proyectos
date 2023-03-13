import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import afc from '../../../img/amafroncard.png'
import af from '../../../img/Amafron.png'
import mfc from '../../../img/mediafrankcard.png'
import pfc from '../../../img/portfoliocard.png'
import rdc from '../../../img/Rescue.png'
import pdc from '../../../img/plantascard.png'


function Msg() {
  const [showAmafron, setShowAmafron] = React.useState(false);
  const [showMediaFrank, setShowMediaFrank] = React.useState(false);

  const handleCloseAmafron = () => setShowAmafron(false);
  const handleShowAmafron = () => setShowAmafron(true);
  const handleCloseMediaFrank = () => setShowMediaFrank(false);
  const handleShowMediaFrank = () => setShowMediaFrank(true);

  return (
    <>
      <div id="proyects">
        <Button variant="primary" onClick={handleShowAmafron}>
          <h1>hola</h1>
        </Button>
        <Modal show={showAmafron} onHide={handleCloseAmafron}>
          <h1>Amafron</h1>
        </Modal>

        <Button variant="primary" onClick={handleShowMediaFrank}>
        <h1>holaa</h1>
        </Button>
        <Modal show={showMediaFrank} onHide={handleCloseMediaFrank}>
          <h1>Meidafrnk</h1>
        </Modal>
      </div>
    </>
  );
}

export default Msg;

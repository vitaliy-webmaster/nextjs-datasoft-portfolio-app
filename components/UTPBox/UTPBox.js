import React from 'react'

const UTPBox = () => {
  return (
    <section className="container utp-box white">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="grey-box-icon">
            <div className="icon-box-top grey-box-icon-pos"><i
              className="fa medium circle-white center icon-results"></i></div>
            <h4>Результат</h4>
            <p>Чистый код, соответствующий последним WEB-стандартам.</p></div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="grey-box-icon">
            <div className="icon-box-top grey-box-icon-pos"><i
              className="fa medium circle-white center icon-responsibility"></i></div>
            <h4>Ответственность</h4>
            <p>Тщательная проработка с заказчиком всех деталей проекта.</p></div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="grey-box-icon">
            <div className="icon-box-top grey-box-icon-pos"><i
              className="fa medium circle-white center icon-payment"></i></div>
            <h4>Послеоплата</h4>
            <p>Для большинства проектов схема оплаты по факту выполненой работы.</p></div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="grey-box-icon">
            <div className="icon-box-top grey-box-icon-pos"><i
              className="fa medium circle-white center icon-support"></i></div>
            <h4>Поддержка</h4>
            <p>Небольшие правки по завершенным проектам ещё в течении 2 недель.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UTPBox

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./print.css";
// import TopThree from "./TopThree";
import IsoComponent from "./IsoComponent";

function App() {
  // const [count, setCount] = useState(0);
  const handlePrint = () => {
    // window.onbeforeprint = () => {
    //   window.remove();
    // };
    window.print();
  };

  return (
    <>
      {/* <TopThree /> */}
      <button onClick={handlePrint}>Print</button>
      <div className="iso-header">
        <IsoComponent />
      </div>
      <div className="print-container">
        <div style={{ width: "70%", margin: "auto", marginTop: "50px" }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nobis
            odit porro recusandae repudiandae quam nulla, corrupti, minima nemo
            possimus aspernatur delectus reiciendis ex, fugit autem eos deleniti
            non eius.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus facere, animi labore hic, possimus molestiae eligendi
            esse, impedit veritatis cum nisi quaerat. Perferendis consequuntur
            voluptatibus vero aperiam, quisquam obcaecati ipsam culpa et ex
            voluptate provident unde natus error architecto! Dignissimos,
            incidunt repudiandae praesentium beatae error labore cumque, minima
            asperiores enim ratione ipsa vero tempore laudantium alias optio? At
            est, saepe nemo recusandae nam mollitia? Facere officiis iusto, et
            impedit deserunt consequatur sequi facilis eligendi quo corrupti
            labore similique, quidem voluptatum autem dolorum! Cum culpa
            deleniti magnam blanditiis optio similique commodi facilis veniam
            distinctio molestias ipsam aspernatur itaque sequi, maiores fuga?
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            earum ea suscipit numquam tempora veniam quis doloribus quod
            excepturi obcaecati error doloremque, ipsam, maxime expedita odit
            voluptates veritatis aliquid necessitatibus neque eius. Autem
            nostrum pariatur laudantium maiores. Quos eaque doloribus modi
            dolores sequi dolor vero iusto necessitatibus perspiciatis vitae
            cupiditate accusamus ipsum maxime illo saepe eveniet autem unde
            suscipit, distinctio hic fuga fugit qui voluptate est. Quo
            consectetur at voluptates itaque facilis quasi! Doloremque,
            laboriosam vero voluptas harum cupiditate quae ut? Libero aperiam
            veritatis, cum nulla reprehenderit quae neque odio tempora
            temporibus ipsum necessitatibus labore repellendus, eaque dolore.
            Excepturi, corporis nobis! Omnis expedita fugiat, consequuntur quod
            ex earum nam aperiam. Quibusdam facilis asperiores vel deserunt
            vitae! Iure at vitae in itaque! Iusto totam fuga consequatur magni
            aut, laudantium harum corporis veritatis commodi minima! Odio
            voluptate, rerum ea id debitis eligendi dolores maiores sint quo
            consectetur quos dolorem, laborum ad? Quibusdam delectus sed,
            necessitatibus iste saepe nam distinctio amet debitis maxime odio
            fugiat esse qui ullam sunt blanditiis quos mollitia harum fuga.
            Voluptatem ipsam quia voluptate corporis voluptatibus molestiae
            impedit fugiat temporibus fugit perspiciatis! Cumque natus
            consequuntur officia! Odit eveniet magnam nostrum libero? Vitae
            consectetur necessitatibus veritatis quae praesentium, minus odit
            saepe vero? Eveniet labore iusto temporibus, culpa quasi qui commodi
            eligendi voluptatum vel nisi enim ratione eaque numquam
            exercitationem excepturi eos necessitatibus sequi minus facilis
            natus. Assumenda, et repellat? Laudantium quia quo est. Consequatur
            ipsam atque molestiae eos provident. Iure qui quam modi aspernatur
            assumenda tempore culpa quo maiores cumque, voluptatem quibusdam
            optio nulla cum dolorum expedita ex at mollitia numquam earum
            adipisci magni voluptatibus ipsum aliquid! Sapiente optio, porro
            earum magnam odit ratione nam velit odio iure ducimus magni atque
            dignissimos nulla. Voluptatum, iste, temporibus architecto, esse at
            alias voluptas tempore fugit modi facilis dignissimos ab? Obcaecati
            officia tempora laboriosam illo veritatis minus quisquam ut ipsa
            quia nam nesciunt quibusdam perferendis, fuga quis est suscipit rem,
            rerum enim eos impedit expedita aspernatur eveniet culpa? Earum iste
            nulla, placeat odio commodi harum quam reiciendis recusandae
            explicabo obcaecati quibusdam modi libero hic fugit similique amet?
            Numquam ratione facere vel reiciendis architecto? Recusandae
            laborum, dignissimos quidem tempore non repellendus commodi
            voluptatum distinctio adipisci expedita praesentium iusto qui
            similique architecto. Ducimus iste blanditiis accusantium?
            Doloremque quia accusantium vitae similique, quam, necessitatibus
            ipsum, velit quas non recusandae unde animi repellat illum quisquam
            ratione corrupti minus eius consectetur ducimus laboriosam impedit
            nam voluptate error. Assumenda quisquam, recusandae voluptatem
            nostrum architecto, doloremque at eum, possimus hic temporibus
            expedita voluptatibus consectetur voluptates. Maiores nisi, quasi
            assumenda quam velit minus quo repellat accusamus obcaecati quos
            autem possimus expedita? Veritatis soluta consequatur ullam
            similique ex aperiam provident sint natus nemo voluptates, iste
            sequi nam sit, omnis quos sed aliquid dolorum obcaecati, molestiae
            nihil dolores non recusandae doloribus? Totam enim, iste architecto
            ut voluptatem rem aliquam velit voluptatibus, nam ullam error.
            Blanditiis accusantium optio suscipit nesciunt. Dolores veritatis
            explicabo non reprehenderit quia officia cum dolore ad dicta amet
            totam distinctio eligendi iste ab possimus, rerum obcaecati fugiat
            modi est minus?
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

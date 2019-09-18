<template>
  <div class="flagShip">

    <div class="flagShipContent">

      <div class="FlagTableComeTel"></div>

      <div class="FlagTableInformation">
        <div class="FlagTableInformationContent">
          <div class="InformationTitle">
            <div class="Ivg"></div>
          </div>

          <div class="InformationNumber"></div>
          <div class="InformationButton"></div>
          <div class="InformationColumn"></div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "flagShip",
  data() {
    return {

    }
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
      margin: 0;
    }
    .flagShip{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  .flagShipContent{
    margin-top: 20px;
    background-color: white;
    width: 50%;
  }
  .FlagTableComeTel{
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #ebebeb;
  }
  .FlagTableInformation{
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .FlagTableInformationContent{
    width: 65%;
    height: 300px;
    background-color: aqua;

  }
  .InformationTitle{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
  }
  .InformationTitle .Ivg{
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background-color: blue;
  }
  .InformationNumber{
    width: 100%;
    height: 80px;
    border: 1px solid blue;
  }

</style>
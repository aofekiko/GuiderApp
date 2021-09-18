<template>
  <div id="app">
    <b-row>
      <b-col>
        <JumboPicture
          header="This is a pic"
          pic="https://picsum.photos/250/250/?image=54"
        ></JumboPicture>
      </b-col>
      <b-col>
        <JumboQuestion header="GENERAL KENOBI"></JumboQuestion>
      </b-col>
      <b-col>
        <JumboQuestion header="!!!!"></JumboQuestion>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <JumboYesNo header="GIVE ME YOUR FOOKING ANSWER"></JumboYesNo>
      </b-col>
    </b-row>
  </div>
</template>
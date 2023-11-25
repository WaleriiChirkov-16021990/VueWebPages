<script>
export default {
  name: 'BlogDetailsPage',
  data() {
    return {
      tags: [
        {
          name: 'Kitchen',
          isSelect: false,
        }, {
          name: 'Bedroom',
          isSelect: false,
        }, {
          name: 'Building',
          isSelect: false
        }, {
          name: 'Architecture',
          isSelect: false
        }, {
          name: 'Kitchen Planning',
          isSelect: false
        }, {
          name: 'Bedroom',
          isSelect: false
        },
      ],
      data: [{
        name: 'Kitchen',
        title: 'Design sprints are great for Kitchen',
        description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu\n' +
            '                        sem vitae turpmaximus.posuere in.Contrary to\n' +
            '                        popular belief.There are many variations of passages of Lorem Ipsum available, but the majority\n' +
            '                        have suffered.',

        kitchen: ['Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.'],
        img: 'img/blogDetails/imgMainFooter.svg',
        imgDescription: '\n' +
            '                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary\n' +
            '                            to\n' +
            '                            popular belief.There are many variations of passages of Lorem Ipsum available, but the\n' +
            '                            majority\n' +
            '                            have suffered.\n' +
            '                        ',

      }, {
        name: 'Building',
        title: 'Design sprints are great for Building',
        description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu\n' +
            '                        sem vitae turpmaximus.posuere in.Contrary to\n' +
            '                        popular belief.There are many variations of passages of Lorem Ipsum available, but the majority\n' +
            '                        have suffered.',

        kitchen: ['Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.'],
        img: 'img/blogDetails/imgMainFooter.svg',
        imgDescription: '\n' +
            '                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary\n' +
            '                            to\n' +
            '                            popular belief.There are many variations of passages of Lorem Ipsum available, but the\n' +
            '                            majority\n' +
            '                            have suffered.\n' +
            '                        ',

      }, {
        name: 'Architecture',
        title: 'Design sprints are great for Architecture',
        description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu\n' +
            '                        sem vitae turpmaximus.posuere in.Contrary to\n' +
            '                        popular belief.There are many variations of passages of Lorem Ipsum available, but the majority\n' +
            '                        have suffered.',

        kitchen: ['Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.'],
        img: 'img/blogDetails/imgMainFooter.svg',
        imgDescription: '\n' +
            '                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary\n' +
            '                            to\n' +
            '                            popular belief.There are many variations of passages of Lorem Ipsum available, but the\n' +
            '                            majority\n' +
            '                            have suffered.\n' +
            '                        ',

      }, {
        name: 'Bedroom',
        title: 'Design sprints are great for Bedrooms',
        description: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu\n' +
            '                        sem vitae turpmaximus.posuere in.Contrary to\n' +
            '                        popular belief.There are many variations of passages of Lorem Ipsum available, but the majority\n' +
            '                        have suffered.',

        kitchen: ['Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of\n' +
        '                                Lorem Ipsum available,\n' +
        '                                but the majority have suffered.'],
        img: 'img/blogDetails/imgMainFooter.svg',
        imgDescription: '\n' +
            '                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary\n' +
            '                            to\n' +
            '                            popular belief.There are many variations of passages of Lorem Ipsum available, but the\n' +
            '                            majority\n' +
            '                            have suffered.\n' +
            '                        ',
      }],
    }
  },
  methods: {
    isTrue(index) {
      this.tags.forEach(element => element.isSelect = false);
      this.tags[index].isSelect = true;
    }
  },
  computed: {
    filtersArticles() {
      let temp = [];
      for (let argument of this.tags) {
        if (argument.isSelect) {
          this.data.filter((element) => element.name === argument.name).forEach((el) => temp.push(el));
        }
      }
      return temp;
    }
  },

}

</script>

<template>
  <main class="main" id="main">
    <div id="banner" class="banner container__full">
      <img id="banner__img" class="banner__img" src="../../assets/img/blogDetails/blogDetailsPoster.svg"
           alt="banner__Background"/>
    </div>
    <div class="blog__filter__details container">
      <div class="blog__filter__details__left">
        <p class="blog__filter__details__left__title">Let’s Get Solution for Building
          Construction Work
        </p>
        <img class="blog__filter__details__left__img" src="../../assets/img/blogDetails/blogDetailresult.svg"
             alt="detailsResult">
        <div class="img__info">
          <p>26 December,2022 </p>
          <nav>
            <a href="#">Interior<span> / </span></a>
            <a href="#">Home<span> / </span></a>
            <a href="#">Decore</a>
          </nav>
        </div>

        <p class="blog__filter__details__desc">
                    <span class="blog__filter__detalis__flex_start">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to
                    popular belief.There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injecthumour, or randomised words which don't look
                    even slightly believable.
                    </span><span class="blog__filter__details__flex_end">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary.
                        </span>
        </p>
        <div class="background__footnote">

          <p class="background__footnote__quotes">“</p>
          <p class="background__footnote__desc">
            The details are not the details.
            They make the design.
          </p>
        </div>
        <!--                <internet-list v-bind:tags="this.tags"></internet-list>-->
        <div>
          <article v-for="(item,index) in filtersArticles" :key="index">
            <h3 class="blog__filter__details__article">{{ item.title }}</h3>
            <p class="blog__filter__details__article__desc">{{ item.description }}</p>
            <ul class="blog__filter__details__article__list">
              <li class="li__1" v-for="(itemList,indexList) in item.kitchen" :key="indexList">
                <p class="li__1__number">{{ indexList + 1 }}</p>
                <p class="li__1__desc">{{ itemList }}</p>
              </li>
            </ul>
            <div>
              <img class="img__main__foot" :src=item.img alt="imgMainFooter">
              <p class="img__main__foot__desc">{{ item.imgDescription }}</p>
            </div>
          </article>
        </div>
      </div>
      <div class="blog__filter__details__right">
        <p class="blog__filter__details__right__title">
          Tags
        </p>
        <!--                <tags-list v-bind:tags="this.tags"></tags-list>-->
        <div class="tags__container">
          <p class="tags__container__btn" v-for="(item,index) in this.tags" :key="index"
             @click="isTrue(index)">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="css">
@import url(@/assets/style2.css);
</style>

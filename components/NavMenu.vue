<template>
  <v-navigation-drawer
    stateless
    value="true"
  >
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <nuxt-link to="/"><v-list-tile-title>Top</v-list-tile-title></nuxt-link>
      </v-list-tile>

      <v-list-group>
        <v-list-tile slot="activator">
          <v-list-tile-action>
            <v-icon>fas fa-bars</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>MENU</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>fas fa-user-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-title><nuxt-link to="/profile">PROFILE</nuxt-link></v-list-tile-title>
        </v-list-tile>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>PRODUCT</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(s, i) in product"
            :key="i"
          >
            <nuxt-link :to="s[1]"><v-list-tile-title v-text="s[0]"></v-list-tile-title></nuxt-link>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>SNS</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(s, i) in sns"
            :key="i"
          >
            <nuxt-link :to="s[1]"><v-list-tile-title v-text="s[0]"></v-list-tile-title></nuxt-link>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>WORK</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(s, i) in work"
            :key="i"
          >
            <nuxt-link :to="s[1]"><v-list-tile-title v-text="s[0]"></v-list-tile-title></nuxt-link>
          </v-list-tile>
        </v-list-group>

        <v-list-tile>
          <v-list-tile-title><a href="http://gamelinks007.hatenablog.com/">BLOG</a></v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-title><a href="https://github.com/S-H-GAMELINKS/myprofile">SOURCE</a></v-list-tile-title>
        </v-list-tile>

      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      sns: [
        [ 'Mastodon', 'https://gamelinks007.net/@S_H' ],
        [ 'GitHub',  'https://github.com/S-H-GAMELINKS' ],
        [ 'Twitter', 'https://twitter.com/GAME_LINKS_' ],
        [ 'Qiita', 'https://qiita.com/S_H_' ],
        [ 'SpeckerDeck', 'https://speakerdeck.com/gamelinks007' ]
      ],
      product: [
        [ 'Game', '/game' ],
        [ 'Other', '/other' ]
      ],
      work: [
        [ 'Lancers', 'https://www.lancers.jp/profile/S_H_' ],
        [ 'CrowdWorks', 'https://crowdworks.jp/public/employees/1497011"' ],
        [ 'Coconala', 'https://coconala.com/users/410038' ],
        [ 'Skima', 'https://skima.jp/u/id33529/' ]
      ]
    })
  }
</script>
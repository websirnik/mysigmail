<template>
  <div :style="{'line-height':(options.font.size ) + 'px'}">
    <table width="320">
      <tr>
        <td>
<table
      cellpadding="0"
      cellspacing="0"
      :style="{'width': '320px','border-top': '1px solid gray' }"
    >
      <tr>
        <td height="12px"><div style="line-height:1px; font-size:1px"></div></td>
      </tr>
      <tr v-if="showAvatar"> 
        <td rowspan="6" colspan="2" valign="top">
          <avatar
            :show-avatar="showAvatar"
            :src="image"
            :size="options.avatar.size"
            :roundness="options.avatar.roundness"
          />
        </td>
      </tr>
      <tr>
        <td>
          <div
            :style="[fontBase, {
              fontSize: `${options.font.size + 2}px`,
              color: options.color.mainPreview || options.color.main,
              fontWeight: 700
            }]"
          >{{ mainByName['Full name'] }}
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div :style="fontBase">
            {{ mainByName['Job title'] }}
            <div>RELAYTO<span style="color: rgb(255,121,26)">/ </span><span style="font-size:7px">DOCUMENT EXPERIENCE</span></div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div :style="fontBase">
            <a
              :style="{'text-decoration': 'none', color: options.color.secondaryPreview || options.color.secondary}"
              :href="'mailto:' + mainByName['Email']"
            >
              {{ mainByName['Email'] }}
            </a>
          </div>
        </td>
        <td>
          <div :style="fontBase">
            <a
              :style="{'text-decoration': 'none',color: options.color.secondaryPreview || options.color.secondary}"
              :href="'http://' + mainByName['Website']"
            >
              {{ mainByName['Website'] }}
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td v-if="mainByName['Link label']">
          <div :style="fontBase">
            <a
              :style="{'text-decoration': 'none',color: options.color.secondaryPreview || options.color.secondary}"
              :href="mainByName['Link']"
            >{{ mainByName['Link label'] }}</a>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div :style="fontBase">
            <b>{{ phoneCountry }}&nbsp;</b>
            <a
              :style="{'text-decoration': 'none',color: options.color.secondaryPreview || options.color.secondary}"
              :href="'tel:' + phoneNumber"
            >{{ phoneNumber }}</a>
          </div>
        </td>
      </tr>
    </table>
    <!-- Addons -->
    <table
      v-if="isAdded('footnote')"
      cellpadding="0"
      cellspacing="0"
      style="width: 320px; border-top: 1px solid #D0D0D0; margin-top: 15px;"
    >
      <tr>
        <td height="12px"><div style="line-height:1px; font-size:1px"></div></td>
      </tr>
      <tr>
        <td style="text-align: center">
          <div
            :style="fontBase"
            v-html="addons.footnote"
          />
        </td>
      </tr>
    </table>
    <table
      v-if="isAdded('interactivePitch')"
      style="width: 320px"
    >
      <tr>
        <td style="text-align: center;">
          <div :style="fontBase">
            <a
              :style="{'text-decoration': 'none', color: options.color.secondaryPreview || options.color.secondary}"
              :href="addons.interactivePitch.link"
            >{{ addons.interactivePitch.text }}</a>&nbsp;
            <img width="14" style="position: relative; top: 4px" src="https://topboard.s3-eu-west-1.amazonaws.com/mysigmailavatars/rocket.png">
          </div>
        </td>
      </tr>
    </table>
    <table
      style="width: 320px; border-top: 1px solid #D0D0D0; margin-top: 15px;"
    >
      <tr>
        <td height="12px"><div style="line-height:1px; font-size:1px"></div></td>
      </tr>
      <tr>
        <td style="text-align: center">
          <img
            width="180"
            src="https://topboard.s3-eu-west-1.amazonaws.com/mysigmailavatars/relaytologo.gif"
          >
        </td>
      </tr>
    </table>
        </td>
      </tr>
    </table>


  </div>
</template>

<script>
import EmailTemplate from './emailTemplate'
import Avatar from './components/Avatar'

export default {
  components: {
    Avatar
  },
  extends: EmailTemplate,
  data () {
    return {
      filterFields: ['Full name', 'Job title', 'Company', 'Email', 'Website', 'Phone', 'Link', 'Link label']
    }
  },
  computed: {

    phoneCountry () {
      let phone = this.mainByName['Phone']
      let re = /^(\w\w)(.+)$/
      let country = ''
      if (re.test(phone)) {
        let parts = re.exec(phone)
        country = parts[1]
      }
      return country
    },

    phoneNumber () {
      let phone = this.mainByName['Phone']
      let re = /^(\w\w)(.+)$/
      let number = phone
      if (re.test(number)) {
        let parts = re.exec(phone)
        number = parts[2].trim();
      }
      return number
    }
  }
}
</script>

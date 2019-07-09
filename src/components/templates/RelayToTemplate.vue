<template>
  <div>
    <table cellpadding="0" cellspacing="0" :style="{'width': '320px','border-top': '1px solid gray' }">
      <tr>
        <td height="15px"></td>
      </tr>
      <tr>
        <td>
          <span
            :style="[fontBase, {
              fontSize: `${options.font.size + 2}px`,
              color: options.color.mainPreview || options.color.main,
              fontWeight: 700
            }]"
          >{{ mainByName['Full name'] }}
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span :style="fontBase">
            {{ mainByName['Job title'] }} 
            RELAYTO<span style="color: rgb(255,121,26)">/</span><span style="font-size:7px">DOCUMENT EXPERIENCE</span>
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span :style="fontBase">
            <a 
              :style="{color: options.color.secondaryPreview || options.color.secondary}" 
              :href="'mailto:' + mainByName['Email']">
              {{ mainByName['Email'] }}
            </a>
          </span>
        </td>
        <td>
          <span :style="fontBase">
            <a 
              :style="{color: options.color.secondaryPreview || options.color.secondary}"  
              :href="'http://' + mainByName['Website']">
              {{ mainByName['Website'] }}
            </a>
          </span>
        </td>
      </tr>
      <tr>
        <td>
          <span :style="fontBase">
            <b>{{ phoneCountry }}&nbsp;</b>
            <a 
              :style="{color: options.color.secondaryPreview || options.color.secondary}"  
              :href="'tel:' + phoneNumber">
                {{ phoneNumber }}
            </a>
          </span>
        </td>
      </tr>
    </table>
    <!-- Addons -->
    <table 
      cellpadding="0" cellspacing="0"
      v-if="isAdded('footnote')"
      style="width: 320px; border-top: 1px solid #D0D0D0; margin-top: 15px;">
      <tr>
        <td height="15px"></td>
      </tr>
      <tr>
        <td style="text-align: center">
          <span :style="fontBase" v-html="addons.footnote">
          </span>
        </td>
      </tr>
    </table>
    <table 
      v-if="isAdded('interactivePitch')"
      style="width: 320px">
      <tr>
        <td style="text-align: center;">
          <span :style="fontBase">
            <a 
              :style="{color: options.color.secondaryPreview || options.color.secondary}"  
              :href="addons.interactivePitch.link">
                {{ addons.interactivePitch.text }} 
            </a>
          </span>
        </td>
      </tr>
    </table>
    <table 
      style="width: 320px; border-top: 1px solid #D0D0D0; margin-top: 15px;">
      <tr>
        <td height="15px"></td>
      </tr>
      <tr>
        <td style="text-align: center">
          <img width="180" src="https://topboard.s3-eu-west-1.amazonaws.com/mysigmailavatars/relaytologo.gif">
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
    // Avatar,
  },
  extends: EmailTemplate,
  data () {
    return {
      filterFields: ['Full name', 'Job title', 'Company', 'Email', 'Website', 'Phone']
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
        number = parts[2]
      }
      return number
    }
  }
}
</script>

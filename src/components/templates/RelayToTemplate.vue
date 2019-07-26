<template>
  <div :style="{'line-height':(options.font.size ) + 'px'}">
    <table width="320">
      <tr>
        <td>
          <table
            cellpadding="0"
            cellspacing="0"
            :style="{'width': '320px','border-top': '1px solid gray' }">
            <tr>
              <td height="12px">
                <div style="line-height:1px; font-size:1px"></div>
              </td>
            </tr>
            <tr v-if="showAvatar">
              <td rowspan="4" valign="top">
                <avatar
                  :show-avatar="showAvatar"
                  :src="image"
                  :size="options.avatar.size"
                  :roundness="options.avatar.roundness" />
              </td>
            </tr>
            <tr>
              <td v-align="top">
                <div
                  :style="[fontBase, {
              fontSize: `${options.font.size + 2}px`,
              color: options.color.mainPreview || options.color.main,
              fontWeight: 700
            }]">{{ mainByName['Full name'] }}
                </div>
              </td>
            </tr>
            <tr>
              <td width="100%" valign="center">
                <div :style="fontBase">
                  {{ mainByName['Job title'] }}
                  <div>RELAYTO<span style="color: rgb(255,121,26)">/ </span><span style="font-size:7px">DOCUMENT EXPERIENCE</span></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <ul :style="{padding: 0, 'list-style': 'none', 'margin-top': '5px'}">
                  <li style="width:48%; float:left; padding:0; margin: 0;" v-if="phoneNumber">
                    <div :style="fontBase">
                      <b>{{ phoneCountry }}&nbsp;</b>
                      <a
                        :style="{'text-decoration': 'none',color: options.color.secondaryPreview || options.color.secondary}"
                        :href="'tel:' + phoneNumber">{{ phoneNumber }}</a>
                    </div>
                  </li>
                  <li style="width:48%; float:left; padding:0; margin: 0;" v-if="mainByName['Website']">
                    <div :style="fontBase" >
                      <a
                        :style="{'text-decoration': 'none',color: options.color.secondaryPreview || options.color.secondary}"
                        :href="mainByName['Website']">
                        {{ mainByName['Website'] }}
                      </a>
                    </div>
                  </li>
                  <!-- <li style="width:48%; float:left; padding:0; margin: 0;" v-if="mainByName['Email']">
                    <div :style="fontBase">
                      <a
                        :style="{'text-decoration': 'none', color: options.color.secondaryPreview || options.color.secondary}"
                        :href="'mailto:' + mainByName['Email']">
                        {{ mainByName['Email'] }}
                      </a>
                    </div>
                  </li> -->
                  <li v-for="(item, index) in otherFields" :key="item.id" style="width:48%; float:left; padding:0; margin: 0;">
                    <div :style="{...fontBase}" v-if="item.type === 'link'">
                      {{ $index}}
                      <a
                        :style="{'text-decoration': 'none',color: options.color.secondaryPreview || options.color.secondary}"
                        :href="item.value">{{ item.name }}</a>
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
            
          </table>
          
          <!-- Addons -->
          <table
            v-if="isAdded('footnote')"
            cellpadding="0"
            cellspacing="0"
            style="width: 320px; border-top: 1px solid #D0D0D0; margin-top: 15px;">
            <tr>
              <td height="12px">
                <div style="line-height:1px; font-size:1px"></div>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">
                <div
                  :style="fontBase"
                  v-html="addons.footnote" />
              </td>
            </tr>
          </table>
          <table
            v-if="isAdded('interactivePitch')"
            style="width: 320px">
            <tr>
              <td style="text-align: center;">
                <div :style="fontBase">
                  <a
                    :style="{'text-decoration': 'none', color: options.color.secondaryPreview || options.color.secondary}"
                    :href="addons.interactivePitch.link">{{ addons.interactivePitch.text }}</a>&nbsp;
                  <img width="14" style="position: relative; top: 4px" src="https://d17i6isrtkqat8.cloudfront.net/rocket.png">
                </div>
              </td>
            </tr>
          </table>
          <table
            style="width: 320px; border-top: 1px solid #D0D0D0; margin-top: 15px;">
            <tr>
              <td height="12px">
                <div style="line-height:1px; font-size:1px"></div>
              </td>
            </tr>
            <tr>
              <td style="text-align: center">
                <a style="text-decoration:none" href="https://relayto.com" target="_blank">
                <img
                  width="180"
                  src="https://d17i6isrtkqat8.cloudfront.net/relaytologo.gif">
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import EmailTemplate from "./emailTemplate";
import Avatar from "./components/Avatar";

export default {
  components: {
    Avatar
  },
  extends: EmailTemplate,
  data() {
    return {
      filterFields: [
        "Full name",
        "Job title",
        "Company",
        "Email",
        "Website",
        "Phone",
        "Link",
        "Link label"
      ]
    };
  },
  computed: {
    phoneCountry() {
      let phone = this.mainByName["Phone"];
      let re = /^(\w\w)(.+)$/;
      let country = "";
      if (re.test(phone)) {
        let parts = re.exec(phone);
        country = parts[1];
      }
      return country;
    },

    phoneNumber() {
      let phone = this.mainByName["Phone"];
      let re = /^(\w\w)(.+)$/;
      let number = phone;
      if (re.test(number)) {
        let parts = re.exec(phone);
        number = parts[2].trim();
      }
      return number;
    }
  }
};
</script>

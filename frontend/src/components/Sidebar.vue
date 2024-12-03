<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="vertical-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
      <a href="index-2.html" class="logo logo-dark">
        <span class="logo-sm">
          <img src="../assets/images/logo1.png" alt="" height="36" />
        </span>
        <span class="logo-lg">
          <img src="../assets/images/logo1.png" alt="" height="80" width="80" style="margin-left:50px;margin-top:30px;margin-bottom:20px" />
        </span>
      </a>
    </div>


    <div data-simplebar class="sidebar-menu-scroll">
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <!-- Dashboard Section -->
          <li class="menu-title" data-key="t-menu" style="margin-top:20px">Dashboard</li>
          <li>
            <router-link to="/dashboard" active-class="active">
              <i class="bx bx-home-alt icon nav-icon"></i>
              <span class="menu-item" >Dashboard</span>
            </router-link>
          
          </li>

          <li>
            <router-link to="#" @click.prevent="toggleSubMenu('booking')" class="has-arrow">
              <i class="bx bx-calendar-alt icon nav-icon"></i>
              <span class="menu-item" data-key="t-booking">Bookings</span>
            </router-link>
            <transition name="submenu" class="submenu">
              <ul v-show="subMenus.booking" class="sub-menu" aria-expanded="false">
                <li><router-link to="/booking-list" data-key="t-booking-list">Booking List</router-link></li>
                <li><router-link to="/booking-create" data-key="t-booking-create">Create Booking</router-link></li>
                <li><router-link to="/booking-history" data-key="t-booking-history">Booking History</router-link></li>
              </ul>
            </transition>
          </li>

          <!-- Customer Section -->
          <!-- <li class="menu-title" data-key="t-customers">Customers</li> -->
          <li>
            <router-link to="#" @click.prevent="toggleSubMenu('customers')" class="has-arrow">
              <i class="bx bx-user-circle icon nav-icon"></i>
              <span class="menu-item" data-key="t-customers">Customers</span>
            </router-link>
            <transition name="submenu">
              <ul v-show="subMenus.customers" class="sub-menu" aria-expanded="false">
                <li><router-link to="/customers-list" data-key="t-customer-list">Customer List</router-link></li>
                <li><router-link to="/customers-create" data-key="t-customer-create">Add Customer</router-link></li>
                <li><router-link to="/customers-activity" data-key="t-customer-activity">Customer Activity</router-link></li>
              </ul>
            </transition>
          </li>

          <!-- Fare Section -->
          <!-- <li class="menu-title" data-key="t-fare">Fare</li> -->
          <li>
            <router-link to="#" @click.prevent="toggleSubMenu('fare')" class="has-arrow">
              <i class="bx bx-credit-card icon nav-icon"></i>
              <span class="menu-item" data-key="t-fare">Fare</span>
            </router-link>
            <transition name="submenu">
              <ul v-show="subMenus.fare" class="sub-menu" aria-expanded="false">
                <li><router-link to="/fare-settings" data-key="t-fare-settings">Fare Settings</router-link></li>
                <li><router-link to="/fare-rates" data-key="t-fare-rates">Fare Rates</router-link></li>
                <li><router-link to="/fare-history" data-key="t-fare-history">Fare History</router-link></li>
              </ul>
            </transition>
          </li>

          <!-- Driver Section -->
          <!-- <li class="menu-title" data-key="t-drivers">Drivers</li> -->
          <li>
            <router-link to="#" @click.prevent="toggleSubMenu('drivers')" class="has-arrow">
              <i class="bx bx-car icon nav-icon"></i>
              <span class="menu-item" data-key="t-drivers">Drivers</span>
            </router-link>
            <transition name="submenu">
              <ul v-show="subMenus.drivers" class="sub-menu" aria-expanded="false">
                <li><router-link to="/drivers-list" data-key="t-driver-list">Driver List</router-link></li>
                <li><router-link to="/drivers-create" data-key="t-driver-create">Add Driver</router-link></li>
                <li><router-link to="/drivers-schedule" data-key="t-driver-schedule">Driver Schedule</router-link></li>
              </ul>
            </transition>
          </li>

          <!-- Location Section -->
          <!-- <li class="menu-title" data-key="t-location">Location</li> -->
          <li>
            <router-link to="#" @click.prevent="toggleSubMenu('location')" class="has-arrow">
              <i class="bx bx bx-map  icon nav-icon"></i>
              <span class="menu-item" data-key="t-location">Location</span>
            </router-link>
            <transition name="submenu">
              <ul v-show="subMenus.location" class="sub-menu" aria-expanded="false">
                <li><router-link to="/location-map" data-key="t-location-map">Location Map</router-link></li>
                <li><router-link to="/location-history" data-key="t-location-history">Location History</router-link></li>
                <li><router-link to="/location-settings" data-key="t-location-settings">Location Settings</router-link></li>
              </ul>
            </transition>
          </li>

          <!-- Plotting Section -->
          <!-- <li class="menu-title" data-key="t-plotting">Plotting</li> -->
          <li>
            <router-link to="#" @click.prevent="toggleSubMenu('plotting')" class="has-arrow">
              <i class="bx bx-map icon nav-icon"></i>
              <span class="menu-item" data-key="t-plotting">Plotting</span>
            </router-link>
            <transition name="submenu">
              <ul v-show="subMenus.plotting" class="sub-menu" aria-expanded="false">
                <li><router-link to="/plotting-map" data-key="t-plotting-map">Plotting Map</router-link></li>
                <li><router-link to="/plotting-history" data-key="t-plotting-history">Plotting History</router-link></li>
                <li><router-link to="/plotting-settings" data-key="t-plotting-settings">Plotting Settings</router-link></li>
              </ul>
            </transition>
          </li>

          <!-- Account Section -->
          <!-- <li class="menu-title" data-key="t-account">Account</li> -->
          <li>
            <router-link to="#" @click.prevent="toggleSubMenu('account')" class="has-arrow">
              <i class="bx bx-user icon nav-icon"></i>
              <span class="menu-item" data-key="t-account">Account</span>
            </router-link>
            <transition name="submenu">
              <ul v-show="subMenus.account" class="sub-menu" aria-expanded="false">
                <li><router-link to="/account-settings" data-key="t-account-settings">Account Settings</router-link></li>
                <li><router-link to="/account-profile" data-key="t-account-profile">Profile</router-link></li>
                <li><router-link to="/account-security" data-key="t-account-security">Security</router-link></li>
              </ul>
            </transition>
          </li>

          <!-- Vehicle Section -->
          <!-- <li class="menu-title" data-key="t-vehicle">Vehicle</li> -->
          <li>
            <router-link to="#" @click.prevent="toggleSubMenu('vehicle')" class="has-arrow">
              <i class="bx bx-car icon nav-icon"></i>
              <span class="menu-item" data-key="t-vehicle">Vehicle</span>
            </router-link>
            <transition name="submenu">
              <ul v-show="subMenus.vehicle" class="sub-menu" aria-expanded="false">
                <li><router-link to="/vehicle-list" data-key="t-vehicle-list">Vehicle List</router-link></li>
                <li><router-link to="/vehicle-add" data-key="t-vehicle-add">Add Vehicle</router-link></li>
                <li><router-link to="/vehicle-maintenance" data-key="t-vehicle-maintenance">Vehicle Maintenance</router-link></li>
              </ul>
            </transition>
          </li>

  
          <li>
            <router-link to="#" @click.prevent="toggleSubMenu('report')" class="has-arrow">
              <i class="bx bx-chart icon nav-icon"></i>
              <span class="menu-item" data-key="t-report">Reports</span>
            </router-link>
            <transition name="submenu">
              <ul v-show="subMenus.report" class="sub-menu" aria-expanded="false">
                <li><router-link to="/report-overview" data-key="t-report-overview">Overview</router-link></li>
                <li><router-link to="/report-analytics" data-key="t-report-analytics">Analytics</router-link></li>
                <li><router-link to="/report-history" data-key="t-report-history">Report History</router-link></li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- ========== Left Sidebar End ========== -->
</template>

<script>
export default {
  data() {
    return {
      subMenus: {
        booking: false,
        customers: false,
        fare: false,
        drivers: false,
        location: false,
        plotting: false,
        account: false,
        vehicle: false,
        report: false
      }
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },
    toggleSubMenu(menu) {
      this.subMenus[menu] = !this.subMenus[menu];
    }
  }
};
</script>

<style scoped>

/* Main menu items (parent links) */

.has-arrow{
  background-color: #f0f0f0; /* Light gray background on hover */
  color: #007bff; /* Blue text on hover */
line-height:1;
padding: 2px;
}

li{

  margin-bottom: 10px;

}


</style>

class build::cron::packages {
  require build::base

  package {[
      'cron'
    ]:
    ensure => present
  }
}

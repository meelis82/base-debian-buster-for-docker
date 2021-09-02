class build::supervisor::packages {
  require build::base

  package {[
      'supervisor'
    ]:
    ensure => present
  }
}

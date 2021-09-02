class build::cron::supervisor {
  require build::cron::packages

  file { '/etc/supervisor/conf.d/cron.conf':
    ensure => present,
    source => 'puppet:///modules/build/etc/supervisor/conf.d/cron.conf',
    mode => "644"
  }
}
